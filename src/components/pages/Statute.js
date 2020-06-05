import React, { useContext } from 'react';

import { Context } from '../../Context';

export default function Statute() {
  const { legal } = useContext(Context);

  return (
    <div className="wrap">
      <h1>{legal.statute.heading}</h1>

      {legal.statute.content.map((paragraph) => (
        <section key={paragraph.heading}>
          <h2>{paragraph.heading}</h2>

          {paragraph.intro && paragraph.intro.text
            ? paragraph.intro.text
            : null}

          {paragraph.intro && paragraph.intro.list ? (
            <ul style={{ marginTop: '0' }}>
              {paragraph.intro.list.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </ul>
          ) : null}

          {paragraph.text ? (
            <ol>
              {paragraph.text.map((text) => (
                <li key={text.number}>
                  {text.number}
                  {text.letters ? (
                    <ol className="letter">
                      {text.letters.map((letter) => (
                        <li key={letter}>{letter}</li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}

      <p style={{ marginTop: '80px' }}>
        <b>{legal.statute.pdf.heading}</b>
        <a href={legal.statute.pdf.link[0]}>{legal.statute.pdf.link[1]}</a>
      </p>
    </div>
  );
}
