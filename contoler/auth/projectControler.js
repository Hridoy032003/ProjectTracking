import { supabase } from "../../Superbase.js";

export const postProject = async (req, res) => {
    try {
        const userId = req.user.id; 

        console.log('Authenticated User:', req.user);


        if (!userId) {
            return res.status(400).json({ message: "User ID is missing" });
        }

        const { projectName, keyskill, projectDiscrption } = req.body;

        // Insert the project into the database
        const { data, error: dbError } = await supabase
            .from('ProjectTabe')
            .insert([
                {
                    projectName,
                    keyskill,
                    userId,
                    projectDiscrption,
                    created_at: new Date(),
                }
            ]);

        if (dbError) {
            console.error('Error inserting project into database:', dbError.message);
            return res.status(500).json({ message: 'Error saving project to database' });
        }

        return res.status(200).json({ message: 'Project registration successful', data });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Unexpected error occurred' });
    }
};
