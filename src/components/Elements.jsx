import "./styles.css"

export const Loader = () => (
    <div className="lds-dual-ring"></div>
)

export const Error = ({error}) => (
    <div>Error occured... error text is: {error}</div>
)

export const Container = ({className, ...props}) => (
    <div className={className}>
        {props.children ? props.children : ''}
    </div>
)


export const Image = ({url}) => {
    return (
        <img src={url} />
    )

}