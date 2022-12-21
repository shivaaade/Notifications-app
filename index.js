const Notification = (props) => {
  //  Write your code here.
  const { cls, img, message } = props;
  return (
    <div className={cls}>
      <img src={img} className="imgsmall" />
      <p>{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <Notification
      cls="container1"
      img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Informational Message"
    />
    <Notification
      cls="container2"
      img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      cls="container3"
      img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      cls="container4"
      img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
