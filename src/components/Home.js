import React from 'react';
import { FcSettings } from 'react-icons/fc';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-5 d-flex justify-content-center">
        <table className="table table-bordered table-hover">
          <thead className="bg-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Amit Sharma</p>
                  </div>
                </div>
              </td>
              <td>30/06/2024</td>
              <td>Senior</td>
              <td>
                <span className="d-flex align-items-center">
                  <span className="status-dot bg-success me-2"></span>
                  Active
                </span>
              </td>
              <td>
                <span className="mx-1 text-primary">
                  <FcSettings style={{ color: 'blue' }} />
                </span>
                <span className="mx-2 text-danger">
                  <IoIosCloseCircleOutline style={{ color: 'red' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Tina Mishra</p>
                  </div>
                </div>
              </td>
              <td>30/06/2024</td>
              <td>Senior</td>
              <td>
                <span className="d-flex align-items-center">
                  <span className="status-dot bg-success me-2"></span>
                  Active
                </span>
              </td>
              <td>
                <span className="mx-1 text-primary">
                  <FcSettings style={{ color: 'blue' }} />
                </span>
                <span className="mx-2 text-danger">
                  <IoIosCloseCircleOutline style={{ color: 'red' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Riya Gupta</p>
                  </div>
                </div>
              </td>
              <td>29/06/2024</td>
              <td>Junior</td>
              <td>
                <span className="d-flex align-items-center">
                  <span className="status-dot bg-danger me-2"></span>
                  Suspended
                </span>
              </td>
              <td>
                <span className="mx-1 text-primary">
                  <FcSettings style={{ color: 'blue' }} />
                </span>
                <span className="mx-2 text-danger">
                  <IoIosCloseCircleOutline style={{ color: 'red' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Rinku Jat</p>
                  </div>
                </div>
              </td>
              <td>29/06/2024</td>
              <td>Senior</td>
              <td>
                <span className="d-flex align-items-center">
                  <span className="status-dot bg-warning me-2"></span>
                  Inactive
                </span>
              </td>
              <td>
                <span className="mx-1 text-primary">
                  <FcSettings style={{ color: 'blue' }} />
                </span>
                <span className="mx-2 text-danger">
                  <IoIosCloseCircleOutline style={{ color: 'red' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Sachin Kulkarni</p>
                  </div>
                </div>
              </td>
              <td>29/06/2024</td>
              <td>Senior</td>
              <td>
                <span className="d-flex align-items-center">
                  <span className="status-dot bg-warning me-2"></span>
                  Inactive
                </span>
              </td>
              <td>
                <span className="mx-1 text-primary">
                  <FcSettings style={{ color: 'blue' }} />
                </span>
                <span className="mx-2 text-danger">
                  <IoIosCloseCircleOutline style={{ color: 'red' }} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
