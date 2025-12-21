"use client";
import { Masonry } from "antd";

const imageList = [
  "https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f",
  "https://images.unsplash.com/photo-1507513319174-e556268bb244",
  "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2",
  "https://images.unsplash.com/photo-1492778297155-7be4c83960c7",
  "https://images.unsplash.com/photo-1508062878650-88b52897f298",
  "https://images.unsplash.com/photo-1506158278516-d720e72406fc",
  "https://images.unsplash.com/photo-1552203274-e3c7bd771d26",
  "https://images.unsplash.com/photo-1528163186890-de9b86b54b51",
  "https://images.unsplash.com/photo-1727423304224-6d2fd99b864c",
  "https://images.unsplash.com/photo-1675090391405-432434e23595",
  "https://images.unsplash.com/photo-1554196967-97a8602084d9",
  "https://images.unsplash.com/photo-1491961865842-98f7befd1a60",
  "https://images.unsplash.com/photo-1721728613411-d56d2ddda959",
  "https://images.unsplash.com/photo-1731901245099-20ac7f85dbaa",
  "https://images.unsplash.com/photo-1617694455303-59af55af7e58",
  "https://images.unsplash.com/photo-1709198165282-1dab551df890",
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "80px 20px" }}>
      {/* ---------- HEADER ---------- */}
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <p style={{ textAlign: "center" }}>
        React, Next.js, Node, MongoDB...
      </p>

      {/* ---------- MASONRY ---------- */}
      <Masonry
        columns={4}
        gutter={16}
        items={imageList.map((img, index) => ({
          key: `item-${index}`,
          data: img,
        }))}
        itemRender={({ data }) => (
          <img
            src={`${data}?w=523&auto=format`}
            alt="skill"
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
        )}
      />

      {/* ---------- TECHNOLOGIES TITLE ---------- */}
      <h2 style={{ marginTop: "60px", textAlign: "center" }}>
        📚 Technologies I’ve Worked With
      </h2>

      {/* ---------- TECHNOLOGIES TABLE ---------- */}
      <div style={{ overflowX: "auto", marginTop: "30px" }}>
        <table align="center">
          <tbody>
            <tr>
              <td align="center"><img src="https://skillicons.dev/icons?i=java" /><br />Java</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=js" /><br />JavaScript</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=ts" /><br />TypeScript</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=mysql" /><br />SQL</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=html" /><br />HTML</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=css" /><br />CSS</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=cpp" /><br />C++</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=c" /><br />C</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=mongodb" /><br />MongoDB</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=mysql" /><br />MySQL</td>
            </tr>

            <tr>
              <td align="center"><img src="https://skillicons.dev/icons?i=nodejs" /><br />Node.js</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=nextjs" /><br />Next.js</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=express" /><br />Express.js</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=react" /><br />React.js</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=redux" /><br />Redux</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=python" /><br />Python</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=spring" /><br />Spring</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=docker" /><br />Docker</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=git" /><br />Git</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=github" /><br />GitHub</td>
            </tr>

            <tr>
              <td align="center"><img src="https://skillicons.dev/icons?i=bootstrap" /><br />Bootstrap</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=tailwind" /><br />Tailwind</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=postman" /><br />Postman</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=vscode" /><br />VS Code</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=eclipse" /><br />Eclipse</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=idea" /><br />IntelliJ</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=bitbucket" /><br />Bitbucket</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=swagger" /><br />Swagger</td>
              <td align="center"><img src="https://skillicons.dev/icons?i=maven" /><br />Maven</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
