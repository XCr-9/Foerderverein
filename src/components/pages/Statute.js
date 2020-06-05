import React, { useContext } from 'react';

import { Context } from '../../Context';
import { meta } from '../../helpers/meta';

export default function Statute() {
  const { legal } = useContext(Context);

  document.title = legal.statute.meta.title;
  meta('name', 'description', legal.statute.meta.description);

  return (
    <div className="wrap">
      <h1>{legal.statute.heading}</h1>

      {legal.statute.content.map((paragraph) => (
        <section key={paragraph.heading}>
          <h2>{paragraph.heading}</h2>

          {/* intro text is a text without numbering */}
          {paragraph.intro && paragraph.intro.text
            ? paragraph.intro.text
            : null}

          {/* intro list is an unsorted list related to intro text */}
          {paragraph.intro && paragraph.intro.list ? (
            <ul style={{ marginTop: '0' }}>
              {paragraph.intro.list.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </ul>
          ) : null}

          {/* text is an object that includes an ordered list (numbers) and possibly a further/nested list orderes by letters */}
          {paragraph.text ? (
            <ol>
              {paragraph.text.map((text) => (
                <li key={text.number}>
                  {text.number}

                  {/* letters is a nested list oredered by letters */}
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

      {/* PDF Download */}
      <p style={{ marginTop: '80px' }}>
        <b>{legal.statute.pdf.heading}</b>
        <a href={legal.statute.pdf.link[0]}>{legal.statute.pdf.link[1]}</a>
      </p>
    </div>
  );
}
