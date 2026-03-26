import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Search, Filter, CheckCircle2, XCircle, Clock, Mail, Phone, MapPin, Car } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  // Dummy data for preview
  const submissions = [
    { id: '1', name: 'John Doe', phone: '(903) 555-0123', email: 'john@example.com', city: 'Sherman, TX', vehicle: '2010 Ford F-150', condition: 'Running', status: 'New', date: '2025-03-14' },
    { id: '2', name: 'Sarah Smith', phone: '(903) 555-0124', email: 'sarah@example.com', city: 'Denison, TX', vehicle: '2005 Honda Civic', condition: 'Not Running', status: 'Contacted', date: '2025-03-13' },
    { id: '3', name: 'Mike Johnson', phone: '(903) 555-0125', email: 'mike@example.com', city: 'Durant, OK', vehicle: '2015 Chevy Silverado', condition: 'Wrecked', status: 'Offer Sent', date: '2025-03-12' },
    { id: '4', name: 'Emily Davis', phone: '(903) 555-0126', email: 'emily@example.com', city: 'Ardmore, OK', vehicle: '2008 Toyota Camry', condition: 'Running', status: 'Completed', date: '2025-03-11' },
    { id: '5', name: 'Chris Wilson', phone: '(903) 555-0127', email: 'chris@example.com', city: 'McKinney, TX', vehicle: '2001 Dodge Ram', condition: 'Missing Parts', status: 'Rejected', date: '2025-03-10' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'ruben2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const filteredSubmissions = filter === 'All' ? submissions : submissions.filter(s => s.status === filter);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FDF2F2] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl w-full max-w-md relative z-10"
        >
          <div className="w-16 h-16 bg-[#EF4444]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#EF4444]/30">
            <Lock className="w-8 h-8 text-[#EF4444]" />
          </div>
          <h2 className="font-display text-4xl text-[#4B5563] text-center mb-2 tracking-wide">Admin Access</h2>
          <p className="font-body text-[#4B5563]/60 text-center mb-8 font-medium">Enter password to view submissions</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[#4B5563] focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all"
              />
              {error && <p className="text-[#EF4444] text-sm mt-2 font-mono">{error}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#EF4444] text-white font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-[#DC2626] transition-colors shadow-md"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF2F2] text-[#4B5563] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-[#EF4444] tracking-wide">Dashboard</h1>
            <p className="font-mono text-sm text-[#4B5563]/60 uppercase tracking-widest font-bold">Texoma Cash Cars Admin</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5563]/40" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-[#4B5563] focus:outline-none focus:border-[#EF4444] transition-colors shadow-sm"
              />
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 border border-gray-300 bg-white rounded-lg text-sm hover:bg-gray-50 transition-colors font-mono uppercase font-bold text-[#4B5563]">
              Logout
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 hide-scrollbar">
          {['All', 'New', 'Contacted', 'Offer Sent', 'Completed', 'Rejected'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider whitespace-nowrap transition-colors shadow-sm ${
                filter === f ? 'bg-[#EF4444] text-white font-bold' : 'bg-white border border-gray-200 text-[#4B5563]/70 hover:text-[#4B5563] hover:border-gray-300 font-bold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubmissions.map(sub => (
            <motion.div 
              key={sub.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#EF4444]/30 transition-colors relative overflow-hidden group shadow-sm"
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${
                sub.status === 'New' ? 'bg-[#10B981]' :
                sub.status === 'Completed' ? 'bg-[#3B82F6]' :
                sub.status === 'Rejected' ? 'bg-[#EF4444]' :
                'bg-[#F5A623]'
              }`}></div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-2xl text-[#4B5563] group-hover:text-[#EF4444] transition-colors">{sub.name}</h3>
                  <p className="font-mono text-xs text-[#4B5563]/50 font-bold">{sub.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border font-bold ${
                  sub.status === 'New' ? 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]' :
                  sub.status === 'Completed' ? 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]' :
                  sub.status === 'Rejected' ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]' :
                  'bg-[#F5A623]/10 border-[#F5A623]/30 text-[#F5A623]'
                }`}>
                  {sub.status}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#4B5563]/80">
                  <Car className="w-4 h-4 text-[#4B5563]/50" />
                  <span className="font-body text-sm font-bold text-[#4B5563]">{sub.vehicle}</span>
                  <span className="font-mono text-xs text-[#4B5563]/60 px-2 py-0.5 bg-gray-100 rounded font-bold">{sub.condition}</span>
                </div>
                <div className="flex items-center gap-3 text-[#4B5563]/80">
                  <Phone className="w-4 h-4 text-[#4B5563]/50" />
                  <span className="font-body text-sm font-medium">{sub.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-[#4B5563]/80">
                  <Mail className="w-4 h-4 text-[#4B5563]/50" />
                  <span className="font-body text-sm truncate font-medium">{sub.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#4B5563]/80">
                  <MapPin className="w-4 h-4 text-[#4B5563]/50" />
                  <span className="font-body text-sm font-medium">{sub.city}</span>
                </div>
              </div>

              <div className="flex gap-2 border-t border-gray-100 pt-4">
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-[#4B5563] font-mono text-xs uppercase py-2 rounded transition-colors font-bold border border-gray-200">View Details</button>
                <button className="flex-1 bg-[#EF4444]/10 hover:bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30 font-mono text-xs uppercase py-2 rounded transition-colors font-bold">Update Status</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
