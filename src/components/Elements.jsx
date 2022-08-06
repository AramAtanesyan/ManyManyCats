import './styles.scss';

export const Loader = () => <div className="lds-dual-ring"></div>;

export const Error = ({ error }) => <div>Error occured... error text is: {error}</div>;

export const Container = ({ className, title, ...props }) => (
  <div className={className}>
    {title ? <h1>{title}</h1> : ''}
    {props.children ? props.children : ''}
  </div>
);

export const Image = ({ url, ...props }) => {
  return <img {...props} src={url} />;
};
