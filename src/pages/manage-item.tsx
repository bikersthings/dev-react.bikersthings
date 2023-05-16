export default () => {
    return (
        <>
            <div className="manage-item">
                <div className="headline">
                    <h4>List Item</h4>
                    <div className="badge badge-primary">Boost! Voucher : [10]</div>
                </div>
            </div>
            <div className="d-flex flex-row gap-2">
                <a href="/user/item/create" className="btn btn-primary mb-4">Tambah Item</a>
                <a href="" className="btn btn-success mb-4">Import Excel Item</a>
                <a href="" className="btn btn-info mb-4">Beli Boost! Voucher</a>
            </div>

        </>
    )
}