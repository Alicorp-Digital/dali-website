import "./styles.scss";

export default function Team() {
  const data = [
    {
      name: "Renato Aguirre",
      role: "Design System Lead",
      image:
        "https://previews.dropbox.com/p/thumb/ACJpXhh1OwSvmQQPSZq5HyP9t6HB6ha1zgGIL02ypglKg9Mp0MhNpChpHCcLfZ3LGxjj-P0q1qW0VMBTJAdGKSCdxHWQiNbtuLIPqAjF2cm_cssvSCdUf14y7magTkeSJqHh0BkPdQorkf_MxWuyqHZnm2rDoWGjfWsxYIyCZXycG9HP4mo6iq9UGO4czTx57yPMDwFMWLsKEBvQ6brVSr0D34trQ_FMDlvUscFfeWXOYNKJc259az8Jcw_r98z_xCFP3DdQUpk_hg5j4X1U8tjZzR4UPHEv3hIpXf_q2Ibj5i6_8MXJqzlIxkqFWCMkEPS7VdBPC_iF8YDyPaXEIkzE/p.png",
    },
    {
      name: "Ruben Sepulveda",
      role: "Design System Designer",
      image:
        "https://previews.dropbox.com/p/thumb/ACL9aD6XJFbj1oaCcZqj7eYOYezqi2mWz2cMPmE4RF25KS5Cuz-5PoGEvGwbYwsHt-2weUexSJiUimXiBmUuJATMuaRtVe3D2tlzsFFuwYkpBEiNZJZUv2EKFZlp4MZM3HYk6RBQMV7OuGPtEqhhwTbKlS9rd2CT_O6asXGWPCUqs799LJWH5VsbuDzwzKrBF4tJzIU99jiOSYsvAX6F8s0NeKzr8O1gRNW0VIQI80Ru3D-ggaz46WMbfjPtw1yAe35qYErWA-Sxy79D8mY8WIELiEPQRa9WSQGMzeZQSY0rgC7-mOQYgaNhXn6WCFpheDUe-pMIBcusnwwHd68lda1E/p.jpeg",
    },
    {
      name: "Paulo Tejada",
      role: "DS Front Developer",
      image:
        "https://previews.dropbox.com/p/thumb/ACKWq0YCWQz4yPqR5c9aZuCufXJbPGWIy3HxpErfl-XYsJb-DEHCu0M2_-Nzq4AKKoQzYz4Uqp2cLHBujM3HDD7lkozujj35bb8IQlxSaf98YFL3tUNio3t5im8lpBwDRz1ono8tjEue1mDoQ1u-wzk3Iayxxeojwohwq3u5SFeKDd3uyWSW8rVDWgs4LZxTBx5zVyw4eYFEYnskpoiilKKEjybN9tGDAd6P_CVQ2kft7wrzcdwkFl29zy76z2h62ioO2KGUc8MlWPNcIb4Gmw4kQiduxA37mGqOfcIkIXyvXdR-5IrtjOJ9ITryQ2yFEb2nPceOQBGbFoAGEddf91w0/p.jpeg",
    },
    {
      name: "José Oscategui",
      role: "DS Front Developer",
      image:
        "https://previews.dropbox.com/p/thumb/ACJmZcwyvr5RLeTYvoVHRf-Ienrg0nMYNqsbSvkQ9bLrS08bHHIKNebv0lNgV8QDBf1sWQGnUEo7aleKHHK6nP7OAvyOvowtF9vgoXECUsoay-JwZlt2do8FA63XYXLqTJhZ6VRrbf9Bj8oV8H-GH-N9nsKh8ONxzoLbFA_ouXkT1CkHe6HSfsBoB8qhVCgukXZ2LTlqFUDNWihXPR1avqBk616UyQFvlc9Tqtg6wMCFsTDsUL7VYUEjeemc9XoAoAw_EDpx4z8NRRIGUOCVcMqVdD6dpAQ8WCWi1cd9G3WjipBujo1U8dOCr4A4bWy7xTV05hQpo2Qhe5D6k-vSdxOk/p.png",
    },
    {
      name: "Abraham Zapata",
      role: "DS Mobile Developer",
      image:
        "https://previews.dropbox.com/p/thumb/ACIzwyLPf2illX9an8pdERrDvyDyATi9nbmfRGo4QLmWUp3iik-fGaXZiCLe5LfmALtCwaUIjqNeC9CZGXHVp5Pa9jXD4QmZaisqmwCNuCVDJPTzTkO5UuiyqfMqbsWR3ithf9HrRG5R4YXcGNz1VV7gOvH2hKhahqxWiLZiSbCFYwa8n4lBiS8vwEHK-G_PbFgLX6LUQAfJDyCQFCMjf6b-eriDWPUn8VIfPZAFr4qzeCwXdh7uX9UltXqSZRtIZ4zsQ7HSorOY7tw7WQPJKshNbc07pk78Xaxwo5I6mfy32KfQ5ubBK_tX07j_RMLwfG68O2aVlJr0nMLIljqTLvZ-/p.png",
    },
    {
      image:
        "https://previews.dropbox.com/p/thumb/ACLQtJFLZojjbWELAI0fBwOMT-gCieFoDZ5AcwlzsOtUam7_2tYdCC3SEn2Vvi_flZQ7oT50IhSyms8-MFzlLsreqSS7FiQ8i8IV043nHF3vNc-xh-kzkCA-rK9O_-ATCOQWYkKOOlaDvbYnULfzS-iBs2Z1adHXkusVCk0TWgT3qmpBJDzGDh_BPvantjzPGhAzfFZwhJq5u0Et-BPaSiVL7GUbmHyF4xexFe492NFUQ3CSiMVSkqF5jb7zlMUtd9miHNOLX8xADgauH8QtkBN6j1_TO6q8rwfuhgjEN2WD_msNsw8iCRP4CCDJumwsfJECOc8EfHQyd3M765RDN_ba/p.jpeg",
      name: "Yuliana Alvarez",
      role: "DS Quality Assurance",
    },
  ];

  return (
    <div className="wrapper">
      <h3 className="dl-title-xs mb-3 pb-4">Equipo</h3>
      <ul
        style={{ margin: "auto" }}
        className="d-flex team-list justify-content-center flex-wrap"
      >
        {data.map((item, index) => (
          <li className="team-member" key={index}>
            <img
              height={80}
              width={80}
              className="rounded-circle mb-1"
              src={item.image}
            />
            <p className="dl-body-nano mb-0">{item.role}</p>
            <span className="dl-body-nano-bold">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
