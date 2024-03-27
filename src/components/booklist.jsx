import Book from "./book";
import { SectionWrapper } from "../hoc";
import { reads } from "../constants";

function BookList(){


    return(    
      <div className="flex flex-wrap gap-32">
      {reads && reads.map((reads, index) => (
          <Book
          key={`book-${index}`}
          reads={reads}
          />
      ))}
  </div>

    )
}


export default SectionWrapper(BookList, "booklist")