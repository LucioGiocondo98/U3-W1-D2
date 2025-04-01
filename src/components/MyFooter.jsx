const MyFooter = (props) => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-light w-100">
        <p className="text-center">{props.text}-2025</p>
      </div>
    </footer>
  );
};
export default MyFooter;
