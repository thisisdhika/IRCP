import React from 'react'

function BlankPage() {
    return(
        <React.Fragment>
            <section style={{
                display:"flex",
                height:"100vh",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1 style={{
                    fontSize : "30px",
                    margin: 0
                }}> 404  </h1> &nbsp; | &nbsp; <span>  Halaman tidak di temukan </span>
            </section>
        </React.Fragment>
    )
}

export default BlankPage