import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <div style={{display: "flex", width: '22%', flexWrap: 'wrap', gap: '5%'}}>
            <MenuItem color="lightblue" title="JOIN US" />
            <MenuItem color="lightgray" title="SETTINGS" />
            <MenuItem color="yellow" title="LOGIN" />
            <MenuItem color="red" title="CONTACT US" />
            <MenuItem color="lightgreen" title="SEARCH" />
            <MenuItem color="indigo" title="HELP" />
            <MenuItem color="lightpink" title="HOME" />
            <MenuItem color="brown" title="DOWNLOAD" />    
        </div>
    )
}