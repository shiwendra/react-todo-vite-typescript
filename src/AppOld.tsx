import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
let items = [
  "Tokyo",
  "New York",
  "San Francisco",
  "London",
  "Peris",
  "New Delhi",
  "Pune",
  "Mumbai",
];
const handleSelectItem = (item: string, index: number) => {
  console.log(item, index);
};
function Appold() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert oncClose={() => setAlertVisibility(false)}>
          Hello <span>World!</span>
        </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default Appold;
