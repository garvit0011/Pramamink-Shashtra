import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      
      <div className="container-fluid mt-5 text-center">
          <div class="heading">
            <h1 id="heading_1">
             <u><i>Pramanik Shashta</i></u>
            </h1>
            <h2 id="heading_2">
              Welcome to the decentralized storage for preserving texts with ease access
            </h2>
          </div>
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card text-center" id="card">
                <div className="card-header">
                  Upload Your Files Here
                </div>
                <div className="card-body">

                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >

                  <div className="form-group">
                    <br></br>
                      <input
                        id="fileDescription"
                        type="text"
                        ref={(input) => { this.fileDescription = input }}
                        className="form-control text-monospace"
                        placeholder="Please provide a detailed description of your file"
                        required />
                  </div>
                  <input id="browse" type="file" onChange={this.props.captureFile} className="text-black text-monospace "/>
                  <br></br>
                  <br></br>
                  <button class="btn btn-primary"><b>Upload!</b></button>
                 </form>
                </div>

              </div>
              <p>&nbsp;</p>
              <table  className="table-sm table-bordered text-monospace" id="table1">
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '400px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '400px'}}>hash/view/get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,30)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,30)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;