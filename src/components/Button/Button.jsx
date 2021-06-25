import './Button.scss';

export default function Button({ text, className, style, onClick }) {
  return (
    <button className={className} style={style} onClick={onClick}>{text}</button>
  );
};