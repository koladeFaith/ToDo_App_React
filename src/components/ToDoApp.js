import React from 'react'
import { Plus, Check, X, Edit3, Calendar, Filter, Search } from 'lucide-react';
const ToDoApp = () => {
    return (
        <>
            <div className="min-h-screen relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                    {/* Animated geometric shapes */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
                        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
                    </div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>

                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <div className="relative z-10 py-8 px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
                                Todo List
                            </h1>
                            <p className="text-white/90 text-lg drop-shadow-lg">Stay organized and productive</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white mb-1">0</div>
                                <div className="text-sm text-white/70">Total Tasks</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-amber-300 mb-1">0</div>
                                <div className="text-sm text-white/70">Active</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-emerald-300 mb-1">0</div>
                                <div className="text-sm text-white/70">Completed</div>
                            </div>
                        </div>

                        {/* Main Card */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                            {/* Add Todo Section */}
                            <div className="p-8 border-b border-white/10">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Add a new task..."
                                        className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-gray-800 placeholder-gray-500 shadow-lg"
                                    />
                                    <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all shadow-lg flex items-center gap-3 font-medium">
                                        <Plus size={20} />
                                        Add Task
                                    </button>
                                </div>
                            </div>

                            {/* Search and Filter */}
                            <div className="p-8 border-b border-white/10 bg-white/5">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Search tasks..."
                                            className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-gray-800 placeholder-gray-500"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-6 py-3 rounded-xl capitalize transition-all bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg">
                                            All
                                        </button>
                                        <button className="px-6 py-3 rounded-xl capitalize transition-all bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20">
                                            Active
                                        </button>
                                        <button className="px-6 py-3 rounded-xl capitalize transition-all bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20">
                                            Completed
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Todo List */}
                            <div className="max-h-96 overflow-y-auto">
                                {/* Empty State */}
                                <div className="p-16 text-center text-white/70">
                                    <div className="mb-6">
                                        <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <Filter size={32} className="text-white/50" />
                                        </div>
                                    </div>
                                    <p className="text-lg">No tasks yet. Add one above!</p>
                                </div>

                                {/* Sample Todo Items (for reference) */}
                                <div className="divide-y divide-white/10 hidden">
                                    {/* Active Todo */}
                                    <div className="p-6 hover:bg-white/5 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <button className="w-6 h-6 rounded-full border-2 border-white/40 hover:border-emerald-400 flex items-center justify-center transition-all backdrop-blur-sm">
                                            </button>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-medium text-white text-lg">
                                                            Sample active task
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                                                            <Calendar size={14} />
                                                            2025-07-21
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-2 text-white/60 hover:text-teal-300 transition-colors rounded-lg hover:bg-white/10">
                                                            <Edit3 size={16} />
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 transition-colors rounded-lg hover:bg-white/10">
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Completed Todo */}
                                    <div className="p-6 hover:bg-white/5 transition-colors bg-white/5 group">
                                        <div className="flex items-center gap-4">
                                            <button className="w-6 h-6 rounded-full border-2 bg-emerald-500 border-emerald-500 text-white flex items-center justify-center transition-all">
                                                <Check size={14} />
                                            </button>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-medium line-through text-white/60 text-lg">
                                                            Sample completed task
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-white/40 mt-1">
                                                            <Calendar size={14} />
                                                            2025-07-21
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-2 text-white/60 hover:text-teal-300 transition-colors rounded-lg hover:bg-white/10">
                                                            <Edit3 size={16} />
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 transition-colors rounded-lg hover:bg-white/10">
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-8 text-white/70 text-lg">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                                🎉 Keep up the great work!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToDoApp