    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CityScape Pro - Publish Tender</title>
    <!-- Using Bootstrap for a clean UI -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .form-container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin-top: 50px; }
        .btn-publish { background-color: #007bff; color: white; width: 100%; }
    </style>
</head>
<body>

<div class="container d-flex justify-content-center">
    <div class="col-md-8 form-container">
        <h3 class="text-center mb-4">🏛️ Publish New E-Governance Tender</h3>
        
        <form action="/api/tenders/publish" method="POST">
            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label class="form-label">Project ID</label>
                    <input type="text" name="projectId" class="form-control" placeholder="e.g., CITY-ROAD-001" required>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Project Title</label>
                    <input type="text" name="title" class="form-control" placeholder="Enter title" required>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea name="description" class="form-control" rows="3" placeholder="Describe the scope of work..."></textarea>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label class="form-label">Budget (in Crores)</label>
                    <input type="number" step="0.01" name="budgetCr" class="form-control" placeholder="e.g., 5.5" required>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Initial Status</label>
                    <select name="status" class="form-select">
                        <option value="Published">Published</option>
                        <option value="Open for Bidding">Open for Bidding</option>
                    </select>
                </div>
            </div>

            <hr>
            <p class="text-muted small">Note: Once published, contractors can submit bids which will be analyzed by the Smart Weighted Bidding Algorithm.</p>
            
            <button type="submit" class="btn btn-publish btn-lg">Publish Tender</button>
        </form>
    </div>
</div>

</body>
</html>