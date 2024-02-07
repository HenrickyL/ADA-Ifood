import Comment, { ICommentProp } from '../Comment'; // Importe o componente de comentário
import {CommentListSty} from './style'

export interface ICommentListProp{
  title: string
  comments: ICommentProp[]
}

const CommentList = ({ comments, title }:ICommentListProp) => {
  return (
    <CommentListSty >
      <h2>{title}</h2>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} content={comment.content} />
      ))}
    </CommentListSty>
  );
};

export default CommentList;
