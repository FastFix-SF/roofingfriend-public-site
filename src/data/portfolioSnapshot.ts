import snapshot from "./portfolio-snapshot.json";

export type SnapshotProjectRow = {
  id: string;
  name: string;
  address: string | null;
  description: string | null;
  project_type: string | null;
  project_category: string | null;
  roof_type: string | null;
  is_public: boolean | null;
  is_featured: boolean | null;
  created_at: string;
};

export type SnapshotPhotoRow = {
  id: string;
  project_id: string;
  photo_url: string;
  thumbnail_url: string | null;
  caption: string | null;
  photo_tag: "before" | "after" | null;
  is_highlighted_before: boolean | null;
  is_highlighted_after: boolean | null;
  uploaded_at: string;
};

export const snapshotProjects =
  snapshot.projects as unknown as SnapshotProjectRow[];
export const snapshotPhotos =
  snapshot.photos as unknown as Record<string, SnapshotPhotoRow[]>;
export const snapshotProjectIds = new Set(snapshotProjects.map((p) => p.id));
