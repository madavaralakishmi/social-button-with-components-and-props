const Button = (props) => {
  const { className, message } = props;
  return <button className={className}>{message}</button>;
};

const element = (
  <div className="bg_image">
    <h1 className="heading">Social Buttons</h1>
    <div className="arrangeButtons">
      <Button className="button1 c1" message="Like" />
      <Button className="button2" message="Comment" />
      <Button className="button3 c3" message="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
