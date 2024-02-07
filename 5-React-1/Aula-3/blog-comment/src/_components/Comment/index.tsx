
import {CommentSty} from './style'

export interface ICommentProp{ 
    author: string,
    content: string
}


const Comment = ({ author, content }: ICommentProp) => {
  return (
    <CommentSty >
      <h3>{author}</h3>
      <p>{content}</p>
    </CommentSty>
  );
};

export default Comment;
