import Comment, { ICommentProp } from '../Comment'; // Importe o componente de comentário
import {CommentListSty} from './style'

interface ICommentListProp{
    comments: ICommentProp[]
}

const CommentList = ({ comments }:ICommentListProp) => {
  return (
    <CommentListSty >
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} content={comment.content} />
      ))}
    </CommentListSty>
  );
};

export default CommentList;
