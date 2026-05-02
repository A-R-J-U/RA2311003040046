export const Login = async () => {
  const res = await fetch("http://20.207.122.201/evaluation-service/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "as2353@srmist.edu.in",
      name: "arjun kaymala",
      rollNo: "RA2311003040046",
      accessCode: "QkbpxH",
      clientID: "8c6eda0d-3a38-468b-989e-5d4cad1a737b",
      clientSecret: "TzfRhfrczRuHBDBD",
    }),
  });

  res.json().then((data) => {
    
  });
};
