const HeadingSection = ({ styles }) => {
    return (
        <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 pl-0">
                        <h3 className="m-0">Test Department</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-lg-end">
                            <img src="/images/icon-filter.svg" alt="Thumb" class="img-fluid" />
                            <a href="#" class={styles.addBtn}><img src="/images/plus.svg" alt="Settings" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HeadingSection