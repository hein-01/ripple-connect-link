export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      admin_login_attempts: {
        Row: {
          attempted_at: string
          email: string
          id: string
          ip_address: string | null
          success: boolean
          user_agent: string | null
        }
        Insert: {
          attempted_at?: string
          email: string
          id?: string
          ip_address?: string | null
          success?: boolean
          user_agent?: string | null
        }
        Update: {
          attempted_at?: string
          email?: string
          id?: string
          ip_address?: string | null
          success?: boolean
          user_agent?: string | null
        }
        Relationships: []
      }
      admin_sessions: {
        Row: {
          admin_user_id: string
          created_at: string
          expires_at: string
          id: string
          last_activity: string | null
          session_token: string
        }
        Insert: {
          admin_user_id: string
          created_at?: string
          expires_at: string
          id?: string
          last_activity?: string | null
          session_token: string
        }
        Update: {
          admin_user_id?: string
          created_at?: string
          expires_at?: string
          id?: string
          last_activity?: string | null
          session_token?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_sessions_admin_user_id_fkey"
            columns: ["admin_user_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          admin_role: Database["public"]["Enums"]["admin_role"]
          created_at: string
          id: string
          last_login_at: string | null
          locked_until: string | null
          login_attempts: number | null
          two_factor_enabled: boolean | null
          two_factor_secret: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_role?: Database["public"]["Enums"]["admin_role"]
          created_at?: string
          id?: string
          last_login_at?: string | null
          locked_until?: string | null
          login_attempts?: number | null
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_role?: Database["public"]["Enums"]["admin_role"]
          created_at?: string
          id?: string
          last_login_at?: string | null
          locked_until?: string | null
          login_attempts?: number | null
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      business_categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      business_reviews: {
        Row: {
          business_id: string
          comment: string | null
          created_at: string
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          business_id: string
          comment?: string | null
          created_at?: string
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          business_id?: string
          comment?: string | null
          created_at?: string
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string | null
          category: string
          city: string | null
          created_at: string
          description: string | null
          email: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          is_verified: boolean | null
          name: string
          owner_id: string | null
          phone: string | null
          rating: number | null
          state: string | null
          total_reviews: number | null
          updated_at: string
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          category: string
          city?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          name: string
          owner_id?: string | null
          phone?: string | null
          rating?: number | null
          state?: string | null
          total_reviews?: number | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          category?: string
          city?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          name?: string
          owner_id?: string | null
          phone?: string | null
          rating?: number | null
          state?: string | null
          total_reviews?: number | null
          updated_at?: string
          website?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      login_attempts: {
        Row: {
          attempted_at: string
          email: string
          id: string
          ip_address: string | null
          success: boolean
        }
        Insert: {
          attempted_at?: string
          email: string
          id?: string
          ip_address?: string | null
          success?: boolean
        }
        Update: {
          attempted_at?: string
          email?: string
          id?: string
          ip_address?: string | null
          success?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          business_description: string | null
          business_name: string | null
          created_at: string
          display_name: string | null
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          two_factor_enabled: boolean | null
          two_factor_secret: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          business_description?: string | null
          business_name?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          business_description?: string | null
          business_name?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          two_factor_enabled?: boolean | null
          two_factor_secret?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_admin_rate_limit: {
        Args: { email_input: string; ip_input?: string }
        Returns: boolean
      }
      check_rate_limit: {
        Args: { email_input: string; ip_input?: string }
        Returns: boolean
      }
      cleanup_expired_admin_sessions: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_current_admin_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["admin_role"]
      }
      log_admin_login_attempt: {
        Args: {
          email_input: string
          ip_input?: string
          success_input?: boolean
          user_agent_input?: string
        }
        Returns: undefined
      }
      log_login_attempt: {
        Args: {
          email_input: string
          ip_input?: string
          success_input?: boolean
        }
        Returns: undefined
      }
      provision_admin_user: {
        Args: { admin_role_input?: string; user_email: string }
        Returns: Json
      }
    }
    Enums: {
      admin_role: "super_admin" | "admin" | "moderator"
      user_role: "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: ["super_admin", "admin", "moderator"],
      user_role: ["user"],
    },
  },
} as const
