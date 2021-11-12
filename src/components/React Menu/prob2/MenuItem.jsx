export default function MenuItem({color, title}){
    const style = {
        borderRadius: '20px',
        backgroundColor: color,
        color: '#f9f9f9',
        padding: '5px 20px',
        width: '30%',
        marginBottom: '20px',
        textAlign: 'center'
    } 
    return (
        <div style={style}>{title}</div>
    )
} 