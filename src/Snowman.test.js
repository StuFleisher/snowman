import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";


describe("Test the Snowman component", function () {


  test("Works without crashing", function () {
    render(<Snowman
      maxWrong="6"
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

    });

  test("Too many wrong guesses should lose", function () {
    const { container } = render(<Snowman
      maxWrong="6"
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

      //guess wrong 6 times
    fireEvent.click(container.querySelector("[value='b']"));
    fireEvent.click(container.querySelector("[value='c']"));
    fireEvent.click(container.querySelector("[value='d']"));
    fireEvent.click(container.querySelector("[value='f']"));
    fireEvent.click(container.querySelector("[value='g']"));
    fireEvent.click(container.querySelector("[value='h']"));

    expect(container.querySelector("[value='b']")).not.toBeInTheDocument();
    expect(container.querySelector(".Snowman-lose")).toBeInTheDocument();
    expect(container.querySelector(".Snowman-lose")).toContainHTML("apple");
  });


  test("Snapshot test: loss", function(){
    const { container } = render(<Snowman
      maxWrong="6"
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]} />);

      //guess wrong 6 times
    fireEvent.click(container.querySelector("[value='b']"));
    fireEvent.click(container.querySelector("[value='c']"));
    fireEvent.click(container.querySelector("[value='d']"));
    fireEvent.click(container.querySelector("[value='f']"));
    fireEvent.click(container.querySelector("[value='g']"));
    fireEvent.click(container.querySelector("[value='h']"));

    expect(container).toMatchSnapshot();
  })

});