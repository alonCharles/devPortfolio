import { adminClient } from "../config/supabaseClient.js"

export const hasPermission = (permissionName) => {
return async (req,res, next) => {
    try {
        const userId = req.user?.id

        if(!userId) {
            return res.status(401).json({message:'Not Authenticated'})
        }

        const {data:profile, error:profileError} = await adminClient
            .from('profiles')
            .select('role_id')
            .eq('id',userId)
            .single()

            if(profileError || !profile.role_id) {
                return res.status(403).json({message: 'No Role Assign'})
            }

        const { data:permission, error:permissionsError } = await adminClient
            .from('role_permissions')
            .select('permissions!inner(name)')
            .eq('role_id', profile.role_id)
            .eq('permissions.name',permissionName)
            .maybeSingle()
            
            if(permissionsError) {
               return res.status(500).json({message:'Permissions Check Failed'})
            }

            if(!permission) {
               return  res.status(403).json({message:'User Not Permitted'})
            }
         
       next()         
    } catch(err) {
         next(err)
}
}
}