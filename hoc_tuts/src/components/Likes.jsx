import hoc from "./hoc";

const Likes = () => {
  return <div>Likes</div>;
};

const EnhancedLikes = hoc(Likes);

export default EnhancedLikes;
