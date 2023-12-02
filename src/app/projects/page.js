"use client";
import Layout from "@/components/layout";
import { TOKEN, DATABASE_ID } from "../../../config";
import { Client } from "@notionhq/client";
import { useState } from "react";

const notion = new Client({
  auth: TOKEN,
});

const getStaticProps = async () => {
  const result = await notion.databases.query({
    database_id: DATABASE_ID,
    sorts: [
      {
        property: "Last ordered",
        direction: "ascending",
      },
    ],
  });
  return result;
};

const Project = () => {
  const fetchData = async () => {
    try {
      const data = await getStaticProps();
      console.log(data);
    } catch (error) {
      console.log(error("Error fetching getStaticProps: ", error));
    }
  };
  console.log("fetchData: " + fetchData.data);
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
