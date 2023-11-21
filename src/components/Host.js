
export default function Host() {
    return (
        <div className="host">
            <p className="host_name">{host.name}</p>
            <img className="host_picture" src={host.picture} alt={host.name} />
        </div>
    )
}
