import { json } from "@remix-run/node";



async function getPosts() {
    return [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For Youu",
      },
    ];
  }

export const loader = async () => {
return json({
    posts: await getPosts(),
  });
  };


// export const loader = async () => {
//     const data = {
//       posts: [
//         {
//           slug: "my-first-post",
//           title: "My First Post",
//         },
//         {
//           slug: "90s-mixtape",
//           title: "A Mixtape I Made Just For You",
//         },
//       ],
//     };
//     return json(data);
//   };
