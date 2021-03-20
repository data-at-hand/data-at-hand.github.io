import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';


const papers = [
    {
        authors: "Young-Ho Kim, Bongshin Lee, Arjun Srinivasan, and Eun Kyoung Choe",
        title: "Data@Hand: Fostering Visual Exploration of Personal Data on Smartphones Leveraging Speech and Touch Interaction",
        description: "ACM CHI 2021. Accepted for Publication.",
        doi: "https://dx.doi.org/10.1145/3411764.3445421",
        link: {
            title: "Supplementary Material",
            url: "/chi2021"
        },
        award: "Best Paper Honorable Mention Award",
        pdf: 'https://data-at-hand.github.io/papers/data-at-hand-chi2021-preprint.pdf'
    }
]

export const Publication = () => {
    return <Section title="Publication" hashId="publication">
        {
            papers.map(p => {
                return <Paper
                    key={p.title}
                    {...p}
                />
            })
        }
    </Section>
}


const Paper = (props: {
    authors: string,
    title: string,
    award?: string | null,
    description: string,
    pdf?: string | null,
    doi?: string | null,
    link?: {title: string, url: string} | null
}) => {
    return <div className="publication-info paragraph">
        {
            props.award != null ? <div className="award-badge">
                <img src={require("../../../assets/seal.svg")}/>
                <span>{props.award}</span>
            </div> : null
        }
        <div className="authors">{props.authors}</div>
        <div className="title"><b>{props.title}</b></div>
        <div>
            {props.description}
            {
                props.doi != null ? <a className="link_doi" href={props.doi} target="_blank">DOI</a> : null
            }
            {
                props.pdf != null ? <a className="link_pdf" href={props.pdf} target="_blank">PDF</a> : null
            }
            {
                props.link != null ? <a className="link_detail" href={props.link.url} target="_blank">{props.link.title}</a> : null
            }
        </div>

    </div>
}