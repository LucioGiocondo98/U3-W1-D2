const MyFooter = (props) => {
  return (
    <footer className="container-fluid bg-dark text-light flex-grow-1">
      <div>
        <p className="text-center">{props.text}-2025</p>
      </div>
    </footer>
  );
};
export default MyFooter;
