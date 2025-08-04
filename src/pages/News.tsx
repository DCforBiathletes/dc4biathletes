import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default News;