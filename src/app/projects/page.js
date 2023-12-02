"use client";

import Layout from "@/components/layout";
import { TOKEN, DATABASE_ID } from "../../../config";
import React from "react";
import { useState } from "react";

export async function getData() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authentication: `Bearer ${TOKEN}`,
      // Authentication: TOKEN,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // const result = await res.json();
  console.log(res);
  return {
    props: { res },
  };
}

const Project = () => {
  const [project, setProject] = useState(getData);
  return (
    <Layout>
      <h1>Project</h1>
    </Layout>
  );
};

//call in buildtime
// const getStaticProps = async () => {
//   const notion = new Client({
//     auth: TOKEN,
//   });
//   const response = await notion.databases.query({
//     database_id: DATABASE_ID,
//     sorts: [
//       {
//         property: "Name",
//         direction: "ascending",
//       },
//     ],
//   });
//   const result = JSON.stringify(response);
//   // const ids = result.results.map((project) => project.id);
//   console.log(response.results);

//   // console.log(ids);
//   console.log(typeof result);
// };

export default Project;
