import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import ContactForm from '../components/Contact'
import moment from 'moment'
import Timeline from '../components/timeline'
import Img from 'gatsby-image'
import * as QrCode from 'qrcode.react'

var DATE_FORMAT = 'MM/YY'
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.renderExperience = this.renderExperience.bind(this)
  }

  componentDidMount() {
    this.calculateAge()
  }

  calculateAge() {
    let ageElem = document.getElementById('age')
    let now = new Date()
    let age = now.getFullYear() - 1992
    ageElem.innerHTML = now.getMonth() < 3 ? --age : age
  }


  render() {
    return (
      <div>
        <Layout>
          <Helmet>
            <title>PB</title>
            <meta name="description" content="About me" />
          </Helmet>

          <div id="main">
            <div className="inner" id="about">
              <h1>About me</h1>

              <div class="print-info">
                <p>Note that this is a printout version of my CV and it may not render perfectly on a printout / pdf version. 
                  For a well rendered version, visit <a href="https://pascalbrokmeier.de/about">https://pascalbrokmeier.de/about</a>
                </p>
                <br/>
                <QrCode value="https://pascalbrokmeier.de/about" level="M"/>
              </div>

              <div className="top">
                <div className="cv-portrait">
                <Img fluid={this.props.data.allImageSharp.edges[0].node.fluid}></Img>
                </div>
                <div
                  className="text"
                  //should contain a "#age" field that we hook into
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.markdownRemark.html,
                  }}
                ></div>
                {/* picture */}
              </div>
              <Timeline positions={this.props.data.positions.edges} projects={this.props.data.projects.edges}></Timeline>
              {/* CV Timeline */}
              {this.renderExperience()}
              <ContactForm></ContactForm>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
  renderExperience() {
    let positions = this.props.data.positions.edges
      .map(({ node }) => ({
        ...node.data,
        Start: new Date(node.data.Start),
      }))
      .sort((a, b) => b.Start - a.Start) // descending sort
      .filter(el => el.isWork)
    let education = this.props.data.education.edges
      .map(({ node }) => ({
        ...node.data,
        Start: new Date(node.data.Start),
      }))
      .sort((a, b) => b.Start - a.Start)

    return (
      <div>
        {positions.map((position, i) => (
          <div key={i}>
            <pre>{}</pre>
          </div>
        ))}
        <table border="0" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td colSpan="2">
                <h2>
                  Work experience: 2008 - today
                </h2>
              </td>
            </tr>
            {positions.map((p, i) => (
              <tr key={i}>
                <td>
                  <span>
                    {p.Start ? moment(p.Start).format(DATE_FORMAT) : ''}
                  </span>{' '}
                  -
                  <span>
                    {' '}
                    {p.End ? moment(p.End).format(DATE_FORMAT) : 'today'}
                  </span>
                </td>
                <td>
                  <p className="cv-institution">
                    <a href={p.URL} target="_blank">
                      {p.Company_Name}
                    </a>
                  </p>
                  <p className="cv-role">{p.Role}</p>
                  <p className="cv-activities">{p.Description}</p>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Education — 2008 - today</span>
                </h2>
              </td>
            </tr>
            {education.map((p,i) => (
              <tr key={i}>
                <td>
                  <span>
                    {p.Start ? moment(p.Start).format(DATE_FORMAT) : ''}
                  </span>{' '}
                  -
                  <span>
                    {' '}
                    {p.End ? moment(p.End).format(DATE_FORMAT) : 'today'}
                  </span>
                </td>
                <td>
                  <p className="cv-institution">
                    <a href={p.URL} target="_blank">
                      {p.University_Name}
                    </a>
                  </p>
                  <p className="cv-role">{p.Degree_Title}</p>
                  <p className="cv-activities">{p.Description}</p>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Internships and community services</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>04/2017 - 08/2017</span>
                </p>
              </td>
              <td>
                <p className="cv-institution">Erasmus Student Network Germany</p>
                <p className="cv-role">
                  <span>National Board member and Partnership Manager</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>03/2015 - 08/2017</span>
                </p>
              </td>
              <td>
                <p className="cv-institution">Erasmus Student Network Köln</p>
                <p>
                  <span>
                    Supporting international students in Cologne, organising
                    trips, get togethers and supporting them with university and
                    other issues. (volunteer &amp; non-profit)
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Summer 2011 (10 weeks)</span>
                </p>
              </td>
              <td>
                <p className="cv-institution">Opitz Consulting GmbH</p>
                <p>
                  <span>
                    Internal IT department support. Focus on Powershell
                    scripting
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p></p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Skills, speeches and publications</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Languages</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    English - advanced written &amp; spoken (Level C1+),
                    language exchange in 2008/2009, 2015, 2016
                  </span>
                </p>
                <p>
                  <span>German - native speaker</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Certificates</span>
                </p>
              </td>
              <td>
                <p>
                  <span><a href="https://www.credential.net/59pxu14t?key=099e2dda586e4a3325f305170f664b6631526107e4414e2dbd65413910692951">Google Cloud Professional Data Engineer - November 2019</a></span>
                </p>
                <p>
                  <span><a href="https://www.credential.net/8rwu69kd?key=9b0feadbff00c9d715f4d191a567aaa04b284607f682760f2a0999457f24c81c">Google Cloud Professional Cloud Architect - August 2019</a></span>
                </p>
                <p>
                  <span>Oracle ADF Implementation Specialist - March 2012</span>
                </p>
                <p>
                  <span>
                    C1+ Council of Europe English Certificate - Jan 2015
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Scholarships</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    Deutschlandstipendium (Germany): Sept. 2014 - 08/2017
                  </span>
                </p>
                <p>
                  <span>
                    PROMOS Exchange Scholarship: March 2016 - July 2016
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Speeches</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    RuhrJUG Community Meeting - Dec. 2015 - IoT Cloud Comparison
                  </span>
                </p>
                <p>
                  <span>
                    OOP Conference (Munich) - Jan. 2015 - Influences of the IoT
                    on software development
                  </span>
                </p>
                <p>
                  <span>
                    DOAG Conference (Nuremberg) - Nov. 2014 - Internet of Things
                    Prototype
                  </span>
                </p>
                <p>
                  <span>
                    OOP Conference (Munich) - Jan. 2013 - ADF Mobile review
                  </span>
                </p>
                <p>
                  <span>
                    DOAG community meet-up (Munich) - Sept. 2012 - ADF Mobile
                    review{' '}
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Publications</span>
                </p>
              </td>
              <td>
                <p>
                  <a href="https://peerj.com/preprints/2989/" target="_blank">
                    Project level effects of gender on contribution evaluation
                    on GitHub (2017)
                  </a>
                </p>

                <p>
                  <span>
                    <a
                      target="_blank"
                      href="/assets/attachments/java-aktuell.pdf"
                    >
                      Java Aktuell (Germany) - April 2015 - First one home, play
                      some funky tunes (2015)
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a
                      target="_blank"
                      href="https://github.com/pascalwhoop/masterthesis/releases/tag/v1.0"
                    >
                      Masterthesis: Observation-based Reinforcement Learning
                      Within Competitive Simulations (2018)
                    </a>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contact

//uses fragment from Contact component
export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { id: { eq: "aboutme-snippet" } }) {
      id
      html
    }
    allDataYaml {
      edges {
        node {
          owner {
            name
            location
          }
        }
      }
    }
    projects: allAirtable(filter: { table: { eq: "Projects" } }) {
      edges {
        node {
          data {
            Start
            End
            Technologies
            Client
            Firm
          }
          recordId
        }
      }
    }
    positions: allAirtable(filter: { table: { eq: "Positions" } }) {
      edges {
        node {
          data {
            Projects
            URL
            Role
            Description
            End
            Start
            Company_Name
            isWork
          }
          recordId
        }
      }
    }
    education: allAirtable(filter: { table: { eq: "Education" } }) {
      edges {
        node {
          data {
            University_Name
            Degree_Title
            Description
            Start
            End
          }
        }
      }
    }
    allImageSharp(
      filter: { sizes: { originalName: { eq: "portrait_pascal_4.jpg" } } }
    ) {
      edges {
        node {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
