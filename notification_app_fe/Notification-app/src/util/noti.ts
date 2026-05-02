export const noti = async (token : string , limit :Number , page:Number , type: string) => {
  const res = await fetch(
    `http://20.207.122.201/evaluation-service/notifications?limit=${limit}&page=${page}&notification_type=${type}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
    },
  );


  return res.json();
};
