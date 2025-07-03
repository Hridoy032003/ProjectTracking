import { supabase } from "../../Superbase.js";
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
    
        const {email,password,name}=req.body
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            
            console.error('Registration Error:', error.message);
            return res.status(500).json({ message: error.message });
        }
        const { error: dbError } = await supabase
        .from('UserTabe')
        .insert([
            { 
                email: email,
                name: name,
                created_at: new Date()
            }
        ]);
        if (dbError) {
            console.error('Error inserting user into database:', dbError.message);
            return res.status(500).json({ message: 'Error saving user to database' });
        }
         console.log("User registered successfully:", data);
     
        return res.status(200).json({ message: 'Registration successful', user: data.user });

    } catch (err) {
        console.error('Unexpected Error:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const login = async (req, res) => {
    try {
    
const {email,password}=req.body
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            
            console.error('Login Error:', error.message);
            return res.status(500).json({ message: error.message });
        }
         const acsecsToken = jwt.sign(data.user, process.env.JWT_SECRET_ACCESSTOKEN, {expiresIn: '1h'});
         const refreshToken = jwt.sign({ userId: data.user.id }, process.env.JWT_SECRET_REFRASHTOKEN, { expiresIn: '7d' });

         res.cookie('accessToken', acsecsToken, {
            httpOnly: true,
         });
         res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
         });
        console.log('User Login successfully:', data);
       
        return res.status(200).json({ message: 'Login successful', user: data.user });

    } catch (err) {
        console.error('Unexpected Error:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

}
 export const logout = async (req, res) => {
  const {error}= await supabase.auth.signOut()

  if(error){
    console.error('Logout Error:', error.message);
  }
  res.status(200).json({message:'Logout successful'})
}
