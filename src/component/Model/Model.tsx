"use client";
import { motion, AnimatePresence } from "framer-motion";

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function Modal({ isOpen, onClose, user }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal box */}
          <motion.div
            className="bg-[#1f1f1f] text-gray-200 rounded-2xl shadow-lg w-96 p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h2 className="text-lg font-bold mb-4">User Details</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Name:</span> {user?.name}</p>
              <p><span className="font-semibold">Email:</span> {user?.email}</p>
              <p><span className="font-semibold">Phone:</span> {user?.phone}</p>
              <p><span className="font-semibold">Website:</span> {user?.website}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
