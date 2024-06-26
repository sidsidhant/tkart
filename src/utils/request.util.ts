import axios from "axios";

export const _request = async (
  method: string,
  endpoint: string,
  body?: any,
  userType?: string,
  token?: any
) => {
  let api = "https://api.testkart.in/api/v1";
  if (process.argv.length > 0) {
    if (process.argv[2] !== "dev") {
      api = "https://api.testkart.in/api/v1";
    }
  } else if (
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost"
  ) {
    api = "https://api.testkart.in/api/v1";
  }

  try {
    if (method.toLowerCase() === "get") {
      if (typeof window !== "undefined") {
        let headers: { [key: string]: string } = {
          "Content-Type": "application/json",
        };
        if (localStorage["token"]) {
          headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        }
        headers["user_type"] = localStorage["userType"];
        const { data } = await axios.get(`${api}/${endpoint}`, {
          headers: headers
        });
        return data;
      } else {
        if (token) {
          const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          };
    
          const { data } = await axios.get(`${api}/${endpoint}`,
            { headers });
          return data;
        } else {
          const { data } = await axios.get(`${api}/${endpoint}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          return data;
        }
      }
    } else if (method.toLowerCase() === "post") {
      const headers: { [key: string]: string } = {
        "Content-Type": "application/json",
      };
      if (userType !== undefined) {
        headers["user_type"] = userType;
      }
      if (localStorage["token"]) {
        headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      }
      const { data } = await axios.post(`${api}/${endpoint}`, body, {
        headers: headers,
      });

      return data;
    }
    else if (method.toLowerCase() === 'delete') {
      const headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
      };

      if (localStorage['token']) {
        headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      }

      headers['user_type'] = localStorage['userType'];

      const response = await axios.delete(`${api}/${endpoint}`, {
        headers: headers,
        data: body,
      });

    }
  } catch (error: any) {
    return error?.response?.data;
  }
};
