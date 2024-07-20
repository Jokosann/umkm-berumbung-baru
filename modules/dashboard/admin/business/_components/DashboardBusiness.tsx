'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Business } from '@prisma/client';

import { MdAddBusiness, MdDelete } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { deleteProfileBusines } from '@/common/libs/firebase/services';
import { bisnisServices } from '@/services/bisnis';
import { useEffect, useRef, useState } from 'react';
import Toaster from '@/components/ui/Toaster';

type PropsTypes = {
  business: Business[];
};

export default function DashboardBusiness({ business }: PropsTypes) {
  const router = useRouter();
  const dialogDeleteButton = useRef<HTMLDialogElement>(null);

  const [toast, setToast] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const handleDeleteBisnis = (id: string) => {
    if (!id) return false;
    setLoading(true);
    deleteProfileBusines(id, async (status: boolean) => {
      if (status) {
        try {
          const result = await bisnisServices.deleteBusines(id);
          console.log(result);
          if (result.status) {
            setToast({
              variant: 'alert-success',
              message: 'Success delete business',
            });
            setDeleteId('');
            setLoading(false);
            router.refresh();
          } else {
            console.log('gagal delete data');
            setDeleteId('');
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setDeleteId('');
          setLoading(false);
        }
      } else {
        console.log('gagal delete');
        setDeleteId('');
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (Object.keys(toast).length > 0) {
      setTimeout(() => {
        setToast({});
      }, 3000);
    }
  }, [setToast, toast]);

  return (
    <>
      {Object.keys(toast).length > 0 && (
        <Toaster variant={toast?.variant as string} message={toast?.message as string} />
      )}
      <dialog ref={dialogDeleteButton} id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete!!</h3>
          <p className="py-4">Apakah kamu yakin ingin menghapus busines ini?</p>
          <div className="modal-action">
            <button
              disabled={loading}
              className="btn bg-red-500 text-white mr-2 hover:bg-red-500/80 hover:text-white"
              onClick={() => handleDeleteBisnis(deleteId)}
            >
              {loading ? 'Loading' : 'Delete'}
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <h1 className="mb-2 text-xl md:text-2xl font-semibold">Business</h1>
      <div className="flex gap-2">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <Link
          href="/dashboard/admin/business/new"
          className="btn bg-primary-color text-white hover:bg-primary-color/70"
        >
          <MdAddBusiness className="text-base" /> <span className="hidden md:block">new busines</span>
        </Link>
        <div className="tooltip" data-tip="Refresh">
          <button className="btn" onClick={() => router.refresh()}>
            <IoMdRefresh className="text-xl" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name Busines</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Alamat</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          {business.length > 0 ? (
            <tbody>
              {business.map((bisnis) => (
                <tr key={bisnis.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            width={50}
                            height={50}
                            src={bisnis.profileBisnis}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold whitespace-nowrap">{bisnis.nameBisnis}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap">{bisnis.username}</td>
                  <td>{bisnis.phone}</td>
                  <td>
                    <p className="line-clamp-2 w-60">{bisnis.alamat}</p>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <div className="tooltip" data-tip="Delete">
                        <button
                          className="btn btn-sm rounded-md"
                          onClick={() => {
                            if (dialogDeleteButton.current) {
                              dialogDeleteButton.current.showModal();
                              setDeleteId(bisnis.id);
                            }
                          }}
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <div className="tooltip" data-tip="Update">
                        <Link
                          href={`/dashboard/admin/business/update/${bisnis.id}`}
                          className="btn btn-sm rounded-md"
                        >
                          <FaEdit />
                        </Link>
                      </div>
                      <div className="tooltip" data-tip="Details">
                        <Link
                          href={`/dashboard/admin/business/detail/${bisnis.id}`}
                          className="btn btn-sm rounded-md"
                        >
                          <TbListDetails />
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <p className="mt-2 italic">Tidak ada busines</p>
          )}
        </table>
      </div>
    </>
  );
}
