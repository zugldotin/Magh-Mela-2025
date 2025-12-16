"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Loader2,
  LogOut,
  Users,
  CreditCard,
  AlertCircle,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2,
  MapPin,
  Phone,
  Calendar,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Lead {
  id: string;
  name: string;
  place_city: string;
  phone: string;
  whatsapp: string;
  emergency_contact: string;
  number_of_people: number;
  journey_start_date: string;
  arrival_date: string;
  number_of_days: number;
  amount: number;
  payment_status: "pending" | "completed" | "failed";
  order_id: string;
  payment_id?: string;
  created_at: string;
  plans?: {
    name: string;
    price: number;
  };
}

interface Stats {
  totalLeads: number;
  completedPayments: number;
  pendingPayments: number;
  failedPayments: number;
  totalRevenue: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/stats");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  }, [router]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "20",
        status: statusFilter,
        ...(search && { search }),
      });

      const res = await fetch(`/api/admin/leads?${params}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, search, router]);

  useEffect(() => {
    fetchStats();
    fetchLeads();
  }, [fetchStats, fetchLeads]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchLeads();
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      fetchLeads();
      fetchStats();
    } catch (error) {
      console.error("Failed to delete lead:", error);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      failed: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={cn(
          "px-2 py-1 rounded-full text-xs font-medium capitalize",
          styles[status as keyof typeof styles]
        )}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#761D14] text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Magh Mela 2026</h1>
            <p className="text-white/70 text-sm">Admin Dashboard</p>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Leads</p>
                  <p className="text-xl font-bold">{stats.totalLeads}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Paid</p>
                  <p className="text-xl font-bold">{stats.completedPayments}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-xl font-bold">{stats.pendingPayments}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <IndianRupee className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="text-xl font-bold">
                    ₹{stats.totalRevenue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex flex-col md:flex-row gap-4 justify-between">
            <form onSubmit={handleSearch} className="flex gap-2 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, phone, or city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="!bg-[#761D14]">
                Search
              </Button>
            </form>

            <div className="flex gap-2 flex-wrap">
              {["all", "completed", "pending", "failed"].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "capitalize",
                    statusFilter === status && "!bg-[#761D14]"
                  )}
                  onClick={() => {
                    setStatusFilter(status);
                    setPage(1);
                  }}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#761D14]" />
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No leads found
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Name & City
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Contact
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Travel Info
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Status
                      </th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-800">{lead.name}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {lead.place_city}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {lead.phone}
                          </p>
                          <p className="text-sm text-green-600">
                            WA: {lead.whatsapp}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <UsersRound className="h-3 w-3" />
                            {lead.number_of_people} people
                          </p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {lead.number_of_days} days
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-800">
                            {lead.plans?.name || "N/A"}
                          </p>
                          <p className="text-sm font-bold text-[#761D14]">
                            ₹{lead.amount}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          {getStatusBadge(lead.payment_status)}
                          <p className="text-xs text-gray-400 mt-1">
                            {formatDate(lead.created_at)}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => setSelectedLead(lead)}
                              title="View Details"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteLead(lead.id)}
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Page {page} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-[#761D14]">Lead Details</h2>
            
            {/* Personal Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Personal Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="font-medium">{selectedLead.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">City</p>
                  <p className="font-medium">{selectedLead.place_city}</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Contact Details</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-medium">{selectedLead.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="font-medium text-green-600">{selectedLead.whatsapp}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-500">Emergency Contact</p>
                  <p className="font-medium text-red-600">{selectedLead.emergency_contact}</p>
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Travel Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Number of People</p>
                  <p className="font-medium">{selectedLead.number_of_people}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Stay Duration</p>
                  <p className="font-medium">{selectedLead.number_of_days} days</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Journey Start Date</p>
                  <p className="font-medium">{formatDate(selectedLead.journey_start_date)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Arrival in Prayagraj</p>
                  <p className="font-medium">{formatDate(selectedLead.arrival_date)}</p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Payment Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Plan</p>
                  <p className="font-medium">{selectedLead.plans?.name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Amount</p>
                  <p className="font-bold text-[#761D14]">₹{selectedLead.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Order ID</p>
                  <p className="font-mono text-sm">{selectedLead.order_id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  {getStatusBadge(selectedLead.payment_status)}
                </div>
                {selectedLead.payment_id && (
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Payment ID</p>
                    <p className="font-mono text-sm">{selectedLead.payment_id}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <p className="text-xs text-gray-500">Booking Date</p>
                  <p className="font-medium">{formatDateTime(selectedLead.created_at)}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                className="flex-1 !bg-green-600 hover:!bg-green-700"
                onClick={() => {
                  window.open(`https://wa.me/91${selectedLead.whatsapp}`, "_blank");
                }}
              >
                WhatsApp
              </Button>
              <Button
                className="flex-1 !bg-[#761D14]"
                onClick={() => setSelectedLead(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
