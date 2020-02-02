import TimelinesChart from 'timelines-chart'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

function Timeline({ projects, positions }) {
  const elRef = React.createRef()
  const containerRef = React.createRef()
  let targetData = null

  function lookupClient(key, positions) {
    try {
      let found = positions.filter(k => k.node.recordId == key)
      return found[0].node.data.Company_Name
    } catch (ex) {
      console.warn("couldn't find right client")
      console.warn(key)
      console.warn(positions.map(p => p.node.recordId).sort())
      return ''
    }
  }

  function convertToTargetFormat(projects, positions) {
    // this generates a list of duplicated label objects matching the data structure required by the library used
    // but it also creates duplicate labels. We want [{label: A, data[1,3,4]}, ...] not [{label: A, data[1]}, {label: A, data[2]}]
    let preparedLabels = projects
      // depth nesting
      .map(el => el.node.data)
      // fix date strings
      .map(el => ({
        ...el,
        Start: new Date(el.Start),
        End: new Date(el.End ? el.End : new Date()),
      }))
      .map(el => {
        let techs = el.Technologies
          ? el.Technologies.map(tech => ({
              label: tech,
              data: [
                {
                  timeRange: [el.Start, el.End],
                  val: lookupClient(el.Firm, positions),
                },
              ],
            }))
          : []
        return techs
      })
      .reduce((acc, val) => acc.concat(val), []);
    // need to flatten all the labels together
    const uniqueLabels = _.uniq(preparedLabels.map(el => el.label))
    const allLabelsGrouped = uniqueLabels.map(l => {
      return {
        label: l,
        data: preparedLabels
          .filter(el => el.label == l) //only labels matching
          .map(el => el.data) //take the data of the matching ones
          .flat() //data is array, avoid double nesting
          .sort((a, b) => a.timeRange[0] - b.timeRange[0]), //sort by start date
      }
    })
    // need to wrap it in a single group (to fit target)
    const results = [
      {
        group: '',
        data: allLabelsGrouped, //.sort((a,b) => a.data[0].timeRange - b.data[0].timeRange)
      },
    ]

    return results
  }
  targetData = convertToTargetFormat(projects, positions)

  const renderTimeline = () => {
    //clear any potentially existing children
    const el = elRef.current
    while (el.firstChild) {
      el.removeChild(el.firstChild)
    }
    const minWidth = 1000
    const width = el.clientWidth > minWidth ? el.clientWidth : minWidth
    const chart = TimelinesChart()
    chart
      .data(targetData)(el)
      .width(width)
      .topMargin(50)
      .maxHeight(800)
      .maxLineHeight(15)
      .timeFormat('%x')
      .zQualitative(true)
      .sortChrono(false)
      .enableAnimations(false)
      .leftMargin(0)

    setTimeout(() => {
      const c = containerRef.current
      c.scroll({ top: 0, left: c.scrollWidth, behavior: 'smooth' }) //scrolls to the right as default to show the labels on mobile
    }, 1000)
  }
  useEffect(renderTimeline)

  return (
    <div>
      <h2>Technology timeline</h2>
      <div className="timeline-container" ref={containerRef}>
        <div ref={elRef}>{/* chart will be rendered in this div */}</div>
      </div>
      {/* <h3>IN</h3> */}
      {/* <pre>{JSON.stringify(projects.slice(1,3), null, 4)}</pre> */}
      {/* <hr></hr> */}
      {/* <pre>{JSON.stringify(positions, null, 4)}</pre> */}
      {/* <h3>OUT</h3> */}
      {/* <pre>{JSON.stringify(targetData[0].data.slice(1,4), null, 4)}</pre> */}
    </div>
  )
}
export default Timeline
