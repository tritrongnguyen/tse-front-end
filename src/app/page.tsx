"use client"; // Thêm dòng này để chỉ định đây là Client Component
import { useState } from 'react';

export default function Home() {
    const [mssv, setMssv] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Kiểm tra định dạng MSSV
        if (!/^\d{8}$/.test(mssv)) {
            setError('MSSV phải gồm 8 chữ số.');
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 12 || password.length > 30) {
            setError('Mật khẩu phải từ 12 đến 30 ký tự.');
            return;
        }

        console.log({ mssv, password });
        // Xử lý đăng nhập hoặc đăng ký ở đây
    };

    const toggleForm = () => setIsRegistering(!isRegistering);

    return (
        <div className="login-container">
            <h1 className='text-center text-white'>Welcome to TSE</h1>
            <h2>{isRegistering ? 'Register' : 'Welcome back, please into an account'}</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                <div>
                    <label>Mssv:</label>
                    <input
                        type='text'
                        value={mssv}
                        onChange={(e) => setMssv(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <div className="form-links">
                <button className="link-button" onClick={toggleForm}>
                    {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
                </button>
                <a href="/forgot-password" className="link-button">Forgot Password?</a>
            </div>
        </div>
    );
}
