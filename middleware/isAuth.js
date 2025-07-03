import jwt from 'jsonwebtoken';
import { supabase } from '../Superbase.js'; 

export const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;  
        const refreshToken = req.cookies.refreshToken;  
        console.log('Access Token:', accessToken);
       console.log('Refresh Token:', refreshToken);
        if (!accessToken && !refreshToken) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

     
        if (accessToken) {
            try {
                const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_ACCESSTOKEN);
                req.user = decoded; 
                console.log('Decoded Access Token:', decoded); 
                return next();
            } catch (err) {
              
                if (err.name === 'TokenExpiredError') {
                    console.log('Access token expired');
                } else {
                    return res.status(401).json({ message: 'Unauthorized: Invalid access token' });
                }
            }
        }

        if (refreshToken) {
            try {
                const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRASHTOKEN);

                const newAccessToken = jwt.sign(
                    { id: decodedRefresh.id, email: decodedRefresh.email }, 
                    process.env.JWT_SECRET_ACCESSTOKEN, 
                 
                );

      
                res.cookie('accessToken', newAccessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', 
                    sameSite: 'Strict',
                    maxAge: 3600000 // 1 hour
                });

                req.user = decodedRefresh;  
                return next();
            } catch (err) {
                return res.status(401).json({ message: 'Unauthorized: Invalid refresh token' });
            }
        }

        // If neither access nor refresh token is available
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    } catch (err) {
        console.error('Error in authentication middleware:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
