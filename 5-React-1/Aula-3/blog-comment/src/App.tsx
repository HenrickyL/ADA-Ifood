import { ICommentProp } from "./_components/Comment";
import CommentList, { ICommentListProp } from "./_components/CommentList"

const commentsObject : ICommentProp[] = [
  { author: "Autor 1", content: "Conteúdo do comentário 1" },
  { author: "Autor 2", content: "Conteúdo do comentário 2" },
  { author: "Autor 3", content: "Conteúdo do comentário 3" },
  // Adicione mais comentários conforme necessário
];

function App() {

  return (
    <>
      <CommentList title="Comment List" comments={commentsObject}/>
    </>
  )
}

export default App
