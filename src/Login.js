import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) return alert("Please fill all fields!");
        
        // Exact CamelCase role routing to match your dynamic Dashboard.js logic
        let role = "Contractor"; 
        if (username.toLowerCase() === "admin") {
            role = "ADMIN";
        }
        
        const userData = { username, role: role };
        localStorage.setItem("user", JSON.stringify(userData));
        
        alert(`Welcome back, ${username}! 🚀`);
        navigate('/dashboard'); 
    };

    const handlePublicEnter = () => {
        const publicUser = { username: "Guest_User", role: "PUBLIC" };
        localStorage.setItem("user", JSON.stringify(publicUser));
        navigate('/dashboard');
    };

    return (
        <div style={cleanCanvasWrapper}>
            <div style={unifiedInterfaceCard}>
                
                {/* --- Top Clean Header Block --- */}
                <div style={topBrandHeaderNode}>
                    <h1 style={portalNomenclatureTitle}>🏛️ CityScape: E-Governance Portal</h1>
                    <div style={horizontalNavigationRow}>
                        <span style={activeNavNode}>🔑 Login</span>
                        <span style={inactiveNavNode} onClick={() => navigate('/register')}>📝 Register</span>
                        <span style={inactiveNavNode} onClick={handlePublicEnter}>🌐 Public</span>
                    </div>
                </div>

                {/* --- Main Content Body Matrix (Matching image_3b8ea2.png structural logic) --- */}
                <div style={splitContentGrid}>
                    
                    {/* Left Column Component */}
                    <div style={leftHeadlineColumn}>
                        <h2 style={secureAccessTypo}>Secure <br />Access</h2>
                    </div>

                    {/* Right Column Component: Spaced Inputs Form */}
                    <div style={rightFormFieldsColumn}>
                        <form onSubmit={handleLogin}>
                            
                            <div style={formFieldSpacing}>
                                <label style={inputFieldLabelStyle}>Username</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter authorization user ID"
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    style={premiumFormInput} 
                                />
                            </div>

                            <div style={formFieldSpacing}>
                                <label style={inputFieldLabelStyle}>Password</label>
                                <input 
                                    type="password" 
                                    placeholder="••••••••"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    style={premiumFormInput} 
                                />
                            </div>

                            <div style={actionRowBlock}>
                                <button type="submit" style={executeSessionBtn}>
                                    Login
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}

// --- SECURE SYSTEM ARCHITECTURE STYLES ---
const cleanCanvasWrapper = { display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '30px 20px', fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', boxSizing: 'border-box' };
const unifiedInterfaceCard = { width: '100%', maxWidth: '900px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)', padding: '45px 50px', boxSizing: 'border-box' };

const topBrandHeaderNode = { borderBottom: '1px solid #f1f5f9', paddingBottom: '20px', marginBottom: '50px' };
const portalNomenclatureTitle = { fontSize: '30px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px 0', letterSpacing: '-0.5px' };
const horizontalNavigationRow = { display: 'flex', gap: '25px', fontSize: '14px', fontWeight: '600' };
const activeNavNode = { color: '#ef4444', borderBottom: '2px solid #ef4444', paddingBottom: '10px', cursor: 'pointer' };
const inactiveNavNode = { color: '#64748b', paddingBottom: '10px', cursor: 'pointer' };

// Side-by-Side Flex Splitter Architecture
const splitContentGrid = { display: 'flex', gap: '40px', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' };

const leftHeadlineColumn = { flex: '1', minWidth: '200px' };
const secureAccessTypo = { fontSize: '38px', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', margin: 0 };

const rightFormFieldsColumn = { flex: '1.8', minWidth: '300px' };
const formFieldSpacing = { marginBottom: '22px' };
const inputFieldLabelStyle = { display: 'block', fontSize: '14px', fontWeight: '500', color: '#475569', marginBottom: '8px' };
const premiumFormInput = { width: '100%', padding: '14px 16px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none' };

const actionRowBlock = { marginTop: '25px' };
const executeSessionBtn = { background: '#ffffff', color: '#1e293b', border: '1px solid #cbd5e1', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' };

export default Login;