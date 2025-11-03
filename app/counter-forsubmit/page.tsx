
import Counter from "./count";

export default function Page() {
  return (
        <div>
            <Counter incrementBy={1} decrementBy={1} buttonColor={'green'}/>
            <Counter incrementBy={2} decrementBy={2} buttonColor={'yellow'}/>
        </div>
  );
}