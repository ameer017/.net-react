using System;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using Application.Activities.Queries;
using Application.Activities.Command;
namespace API.Controllers;

public class ActivitiesController() : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken ct)
    {
        return await Mediator.Send(new GetActivityList.Query(), ct);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {

        return await Mediator.Send(new GetActivityDetail.Query { Id = id });
    }

    [HttpPost]
    public async Task<Activity> CreateActivity([FromBody] Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }

    [HttpPut]
    public async Task<Activity> EditActivity(Activity activity)
    {
        var updated = await Mediator.Send(new EditActivity.Command { Activity = activity });
        return updated;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
        return NoContent();
    }
}

